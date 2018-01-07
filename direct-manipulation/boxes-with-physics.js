($ => {
    let boxCreateMap = new Map();
    let boxMoveMap = new Map();
    let score = 0;

    let trackBallDrag = event => {
        $.each(event.changedTouches, function (index, touch) {
            if (touch.target.movingBox) {
                let newPosition = {
                    left: touch.pageX - touch.target.deltaX,
                    top: touch.pageY - touch.target.deltaY
                };

                $(touch.target).data('position', newPosition);
                touch.target.movingBox.offset(newPosition);
            }
        });

        event.preventDefault();
    };

    let endBallDrag = event => {
        $.each(event.changedTouches, (index, touch) => {
            if (touch.target.movingBox) {
                touch.target.movingBox = null;
            }
        });
    };

    const FRICTION_FACTOR = 0.99;
    const ACCELERATION_COEFFICIENT = 0.05;
    const FRAME_RATE = 120;
    const FRAME_DURATION = 1000 / FRAME_RATE;

    let lastTimestamp = 0;
    let updateBalls = timestamp => {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        if (timestamp - lastTimestamp < FRAME_DURATION) {
            window.requestAnimationFrame(updateBalls);
            return;
        }

        $("div.ball").each((index, element) => {
            let $element = $(element);

            let s = $element.data('position');
            let v = $element.data('velocity');
            let a = $element.data('acceleration');

            s.left += v.x;
            s.top -= v.y;

            v.x += (a.x * ACCELERATION_COEFFICIENT);
            v.y += (a.y * ACCELERATION_COEFFICIENT);
            v.z += (a.z * ACCELERATION_COEFFICIENT);

            v.x *= FRICTION_FACTOR;
            v.y *= FRICTION_FACTOR;
            v.z *= FRICTION_FACTOR;

            let $parent = $element.parent();
            let bounds = {
                left: $parent.offset().left,
                top: $parent.offset().top
            };

            bounds.right = bounds.left + $parent.width();
            bounds.bottom = bounds.top + $parent.height();

            if ((s.left <= bounds.left) || (s.left + $element.width() > bounds.right)) {
                s.left = (s.left <= bounds.left) ? bounds.left : bounds.right - $element.width();
                v.x = -v.x;
            }

            if ((s.top <= bounds.top) || (s.top + $element.height() > bounds.bottom)) {
                s.top = (s.top <= bounds.top) ? bounds.top : bounds.bottom - $element.height();
                v.y = -v.y;
            }

            $("div.ball").each((ballIndex, ballElement) => {
                let $ballElement = $(ballElement);
                let boxBounds = {
                    left: $ballElement.offset().left,
                    top: $ballElement.offset().top
                };

                boxBounds.right = boxBounds.left + $ballElement.width();
                boxBounds.bottom = boxBounds.top + $ballElement.height();
                if (element !== ballElement && 
                        (collision($element, $ballElement) === 'left' ||
                        collision($element, $ballElement) === 'right')) {
                    s.left = (collision($element, $ballElement) === 'left') ? 
                        boxBounds.left - $element.width() : boxBounds.right;
                    v.x = -v.x;
                } else if (element !== ballElement && 
                        (collision($element, $ballElement) === 'top' || 
                        collision($element, $ballElement) === 'bottom')) {
                    
                    s.top = (collision($element, $ballElement) === 'top') ? 
                        boxBounds.top - $element.height() : boxBounds.bottom;
                    v.y = -v.y;
                }
            });


            $("div.box").each((boxIndex, boxElement) => {
                let $boxElement = $(boxElement);
                let boxBounds = {
                    left: $boxElement.offset().left,
                    top: $boxElement.offset().top
                };

                boxBounds.right = boxBounds.left + $boxElement.width();
                boxBounds.bottom = boxBounds.top + $boxElement.height();

                if (collision($element, $boxElement) === 'left' || collision($element, $boxElement) === 'right') {
                    s.left = (collision($element, $boxElement) === 'left') ? 
                    boxBounds.left - $element.width() : boxBounds.right;
                    v.x = -v.x;
                    if (v.x > 5 || v.x < -5) {
                        score++;
                        $("#scoreBoard").text("Boxes Destroyed: " + score);
                        $boxElement.remove();
                    }
                } else if (collision($element, $boxElement) === 'top' || collision($element, $boxElement) === 'bottom') {
                    s.top = (collision($element, $boxElement) === 'top') ? boxBounds.top - $element.height() : boxBounds.bottom;
                    v.y = -v.y;
                    if (v.y > 5 || v.y < -5) {
                        score++;
                        $("#scoreBoard").text("Boxes Destroyed: " + score);
                        $boxElement.remove();
                    }
                }
            });

            $(element).offset(s);
        });

        lastTimestamp = timestamp;
        window.requestAnimationFrame(updateBalls);
    };

    let startDraw = function (event) {
        if (event.target === this) {
            $.each(event.changedTouches, function(index, touch){

                let position = { left: touch.pageX, top: touch.pageY };

                let originalPosition = { left: touch.pageX, top: touch.pageY };
                let drawingBox = $("<div></div>")
                    .appendTo($("#drawing-area"))
                    .addClass("box")
                    .data({ position, originalPosition })
                    .offset(position); 
                
                boxCreateMap.set(touch.identifier, drawingBox);
            });
        }
    };

    let trackBoxDrag = function (event) {
        $.each(event.changedTouches, function(index, touch){
            if (boxCreateMap.has(touch.identifier)) {
                let touchedBox = boxCreateMap.get(touch.identifier);
                let newPosition = {
                    left: (touch.pageX < touchedBox.data("originalPosition").left) ? 
                        touch.pageX : touchedBox.data("position").left,
                    top: (touch.pageY < touchedBox.data("originalPosition").top) ? 
                        touch.pageY : touchedBox.data("position").top
                };

                touchedBox
                    .data({ position: newPosition })
                    .offset(newPosition)
                    .width(Math.abs(touchedBox.data("originalPosition").left - touch.pageX))
                    .height(Math.abs(touchedBox.data("originalPosition").top - touch.pageY));

            } else if (boxMoveMap.has(touch.identifier)) {
                let touchedBox = boxMoveMap.get(touch.identifier);
                let newPosition = {
                    left: touch.pageX - touchedBox.deltaX,
                    top: touch.pageY - touchedBox.deltaY
                };

                touchedBox
                    .data({ position: newPosition })
                    .offset(newPosition);
            }
        });
    };

    let startBoxMove = function (event) {
        $.each(event.changedTouches, function(index, touch){

            let touchedBox = $(touch.target);
                
            let startOffset = touchedBox.offset();
            touchedBox.data({ position: startOffset });


            touchedBox.deltaX = touch.pageX - startOffset.left;
            touchedBox.deltaY = touch.pageY - startOffset.top;
                
            boxMoveMap.set(touch.identifier, touchedBox);
                
        });
    };

    let endBoxDrag = function (event) {
        
        $.each(event.changedTouches, function(index, touch){
            if (boxCreateMap.has(touch.identifier)) {

                let touchedBox = boxCreateMap.get(touch.identifier);
                touchedBox
                    .bind("touchstart", startBoxMove);

                boxCreateMap.delete(touch.identifier);

            } else if (boxMoveMap.has(touch.identifier)) {
                let touchedBox = boxMoveMap.get(touch.identifier);
                boxMoveMap.delete(touch.identifier);

                if (isColliding($(".deleteBox"), touchedBox)) {
                    touchedBox.remove();
                }
            }

        
        });
    };

    let collision = function (ball, box) {
        let dx = (ball.data("position").left + ball.width() / 2) - (box.data("position").left + box.width() / 2);
        let dy = (ball.data("position").top + ball.height() / 2) - (box.data("position").top + box.height() / 2);
        let width = (ball.width() + box.width()) / 2;
        let height = (ball.height() + box.height()) / 2;
        let crossWidth = width * dy;
        let crossHeight = height * dx;
        let collision = 'none';
        if (Math.abs(dx) <= width && Math.abs(dy) <= height){
            if (crossWidth > crossHeight) {
                collision = (crossWidth > (-crossHeight)) ? 'bottom' : 'left';
            } else {
                collision = (crossWidth > -(crossHeight)) ? 'right' : 'top';
            }
        }
        return (collision);
    };

    let isColliding = function(deleteBox, box) {
        return !(
            ((deleteBox.data("position").top + deleteBox.height()) < (box.data("position").top)) ||
            (deleteBox.data("position").top > (box.data("position").top + box.height())) ||
            ((deleteBox.data("position").left + deleteBox.width()) < box.data("position").left) ||
            (deleteBox.data("position").left > (box.data("position").left + box.width()))
        );
    };

    let setDrawingArea = jQueryElements => {

        jQueryElements
            .addClass("drawing-area")
            .bind("touchstart", startDraw)
            .bind("touchmove", trackBoxDrag)
            .bind("touchend", endBoxDrag)
            .bind("touchleave", endBoxDrag);

        $(".deleteBox")
            .data({
                position: $(".deleteBox").offset()
            });

        jQueryElements
            .addClass("drawing-area")
            .each((index, element) => {
                $(element)
                    .bind("touchmove", trackBallDrag)
                    .bind("touchend", endBallDrag);
            })
            .find("div.ball").each((index, element) => {
                $(element)
                    .data({
                        position: $(element).offset(),
                        velocity: { x: 0, y: 0, z: 0 },
                        acceleration: { x: 0, y: 0, z: 0 }
                    });
            });

        window.ondevicemotion = event => {
            let a = event.accelerationIncludingGravity;
            $("div.ball").each((index, element) => {
                $(element).data('acceleration', a);
            });
        };
        window.requestAnimationFrame(updateBalls);

    };

    $.fn.boxesWithPhysics = function () {
        setDrawingArea(this);
        return this;
    };
})(jQuery);