cmd_Release/canvas.node := ./gyp-mac-tool flock ./Release/linker.lock g++ -shared -L../usr/local/lib -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release -install_name /usr/local/lib/canvas.node  -o Release/canvas.node Release/obj.target/canvas/src/Canvas.o Release/obj.target/canvas/src/CanvasGradient.o Release/obj.target/canvas/src/CanvasPattern.o Release/obj.target/canvas/src/CanvasRenderingContext2d.o Release/obj.target/canvas/src/color.o Release/obj.target/canvas/src/Image.o Release/obj.target/canvas/src/ImageData.o Release/obj.target/canvas/src/init.o Release/obj.target/canvas/src/PixelArray.o -undefined dynamic_lookup -lpixman-1 -lcairo -ljpeg
