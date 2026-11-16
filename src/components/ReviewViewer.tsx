import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";

type ReviewViewerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: { url: string }[];
  index: number;
  onMove: (direction: number) => void;
};

export function ReviewViewer({ open, onOpenChange, images, index, onMove }: ReviewViewerProps) {
  const image = images[index];
  if (!image) return null;

  return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-home-ink/90 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content aria-describedby={undefined} className="review-viewer fixed inset-0 z-[101] flex h-dvh w-full flex-col bg-home-ink text-home-paper outline-none motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=open]:zoom-in-95" onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); onMove(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); onMove(1); }
      }}>
        <header className="flex shrink-0 items-center justify-between gap-4 px-4 py-3">
          <DialogPrimitive.Title className="text-sm font-medium">Отзыв {index + 1} / {images.length}</DialogPrimitive.Title>
          <DialogPrimitive.Close asChild><Button variant="ghost" size="icon" aria-label="Закрыть отзыв" title="Закрыть отзыв" className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><X /></Button></DialogPrimitive.Close>
        </header>
        <TransformWrapper key={index} minScale={1} maxScale={6} centerOnInit wheel={{ step: 0.08 }} doubleClick={{ mode: "toggle", step: 1.5 }}>
          {({ zoomIn, zoomOut, resetTransform }) => <>
            <div className="min-h-0 flex-1 overflow-hidden">
              <TransformComponent wrapperClass="review-zoom-surface" contentClass="review-zoom-content">
                <img src={image.url} alt={`Отзыв клиента клиники MD-Комильфо ${index + 1}`} draggable={false} className="block max-h-full w-full select-none object-contain" />
              </TransformComponent>
            </div>
            <footer className="flex shrink-0 items-center justify-center gap-2 px-3 pb-5 pt-3">
              <Button variant="ghost" size="icon" aria-label="Предыдущий отзыв" title="Предыдущий отзыв" onClick={() => onMove(-1)} className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><ChevronLeft /></Button>
              <Button variant="ghost" size="icon" aria-label="Уменьшить отзыв" title="Уменьшить отзыв" onClick={() => zoomOut()} className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><ZoomOut /></Button>
              <Button variant="ghost" size="icon" aria-label="Сбросить увеличение" title="Сбросить увеличение" onClick={() => resetTransform()} className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><RotateCcw /></Button>
              <Button variant="ghost" size="icon" aria-label="Увеличить отзыв" title="Увеличить отзыв" onClick={() => zoomIn()} className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><ZoomIn /></Button>
              <Button variant="ghost" size="icon" aria-label="Следующий отзыв" title="Следующий отзыв" onClick={() => onMove(1)} className="text-home-paper hover:bg-home-paper/15 hover:text-home-paper"><ChevronRight /></Button>
            </footer>
          </>}
        </TransformWrapper>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}