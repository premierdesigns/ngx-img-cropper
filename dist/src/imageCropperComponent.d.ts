import { Renderer2, ElementRef, EventEmitter, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { ImageCropper } from "./imageCropper";
import { CropperSettings } from "./cropperSettings";
import { CropPosition } from "./model/cropPosition";
export declare class ImageCropperComponent implements AfterViewInit, OnChanges, OnDestroy {
    cropcanvas: ElementRef;
    fileInput: ElementRef;
    settings: CropperSettings;
    image: any;
    inputImage: any;
    cropper: ImageCropper;
    cropPosition: CropPosition;
    cropPositionChange: EventEmitter<CropPosition>;
    onCrop: EventEmitter<any>;
    imageSet: EventEmitter<boolean>;
    croppedWidth: number;
    croppedHeight: number;
    intervalRef: number;
    raf: number;
    renderer: Renderer2;
    windowListener: EventListenerObject;
    private isCropPositionUpdateNeeded;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onTouchMove(event: TouchEvent): void;
    onTouchStart(event: TouchEvent): void;
    onTouchEnd(event: TouchEvent): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    fileChangeListener($event: any): void;
    private resize;
    reset(): void;
    setImage(image: HTMLImageElement, newBounds?: any): void;
    private isCropPositionChanged;
    private updateCropBounds;
    private getOrientedImage;
}
