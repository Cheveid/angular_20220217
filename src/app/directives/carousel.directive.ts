import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, filter, map, Subject, takeUntil, withLatestFrom } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T;
	next: () => void;
	back: () => void;
	change: (index: number) => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit, OnDestroy {
	@Input() set appCarouselOf(items: T[]) {
		if (!items?.length) {
			this.viewContainerRef.clear();

			return;
		}

		this.items$.next(items);
		this.currentIndex$.next(0);
	}

	private items$ = new BehaviorSubject<T[] | null>(null);
	private currentIndex$ = new BehaviorSubject<number>(0);
	private destroy$ = new Subject<void>();

	constructor(
		private templateRef: TemplateRef<unknown>,
		private viewContainerRef: ViewContainerRef,
	) {}

	ngOnInit(): void {
		this.listenInitChange();
	}

	private listenInitChange() {
		this.currentIndex$
			.pipe(
				withLatestFrom(this.items$.pipe(filter(Boolean))),
				map(([index, items]) => this.getCurrentContext(items[index])),
				takeUntil(this.destroy$),
			)
			.subscribe((context) => {
				this.viewContainerRef.clear();
				this.viewContainerRef.createEmbeddedView(this.templateRef, context);
			});
	}

	private getCurrentContext(item: T): ICarouselContext<T> {
		return {
			$implicit: item,
			next: () => this.next(),
			back: () => this.back(),
			change: (index) => this.change(index),
		} as ICarouselContext<T>;
	}

	private next() {
		let nextIndex = this.currentIndex$.value + 1;
		const itemsLength = (this.items$.value as T[]).length;

		if (nextIndex >= itemsLength) {
			nextIndex = 0;
		}

		this.currentIndex$.next(nextIndex);
	}

	private back() {
		let nextIndex = this.currentIndex$.value - 1;
		const itemsLength = (this.items$.value as T[]).length;

		if (nextIndex < 0) {
			nextIndex = itemsLength - 1;
		}

		this.currentIndex$.next(nextIndex);
	}

	private change(index: number) {
		this.currentIndex$.next(index);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
