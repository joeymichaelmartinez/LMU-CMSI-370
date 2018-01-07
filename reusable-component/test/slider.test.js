describe("Slider plugin", () => {
    const options = {
        change: () => {

        }
    };

    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("slider.fixture.html");
        window.onbeforunload = () => 'Hello';
    });

    afterEach(() => fixture.cleanup());

    it("should return itself when the plugin is installed", () => {
        const $target = $(".slide-this");
        const $pluginResult = $target.slider(options);

        expect($pluginResult).toBe($target);
    });

    let transformUpdateTest = () => {
        const mousedown = $.Event("mousedown", { 
            screenX: $(".slide-this").position().left, 
            screenY: $(".slide-this").position().top 
        });
        $(".slide-this").trigger(mousedown);

        let mousemove = $.Event("mousemove", { screenX: 10 });
        $(".slide-this").trigger(mousemove);

        expect($(".slide-this").attr('style')).toBe("width: 100px; position: relative; left: 2px;");

        mousemove = $.Event("mousemove", { screenX: 40 });
        $(".slide-this").trigger(mousemove);
        expect($(".slide-this").attr('style')).toBe("width: 100px; position: relative; left: 32px;");

        mousemove = $.Event("mousemove", { screenX: 1000 });
        $(".slide-this").trigger(mousemove);
        expect($(".slide-this").attr('style')).toBe("width: 100px; position: relative; left: 100px;");

        mousemove = $.Event("mousemove", { screenX: -10 });
        $(".slide-this").trigger(mousemove);
        expect($(".slide-this").attr('style')).toBe("width: 100px; position: relative; left: 0px;");

        $(".slide-this").trigger($.Event("mouseup"));
    };

    let sliderUpdateTest = () => {
        const mousedown = $.Event("mousedown", { screenX: 20 });
        $(".slide-this").trigger(mousedown);

        let mousemove = $.Event("mousemove", { screenX: 10 });
        $(".slide-this").trigger(mousemove);
        expect($(".slide-this").data('slide-distance')).toBe(-10);

        mousemove = $.Event("mousemove", { screenX: 30 });
        $(".slide-this").trigger(mousemove);
        expect($(".slide-this").data('slide-distance')).toBe(10);

        $(".slide-this").trigger($.Event("mouseup"));
    };

    describe("installed behavior with callback", () => {
        beforeEach(() => $(".slide-this").slider(options));

        it("should update its CSS transform correctly", transformUpdateTest);
        it("should update the slider position correctly", sliderUpdateTest);

        it("should invoke the callback correctly", () => {
            spyOn(options, 'change');

            const mousedown = $.Event("mousedown", { screenX: 20 });
            $(".slide-this").trigger(mousedown);

            let mousemove = $.Event("mousemove", { screenX: 10 });
            $(".slide-this").trigger(mousemove);
            expect(options.change).toHaveBeenCalledWith(0);

            mousemove = $.Event("mousemove", { screenX: 30 });
            $(".slide-this").trigger(mousemove);
            expect(options.change).toHaveBeenCalledWith(10);

            $(".slide-this").trigger($.Event("mouseup"));
        });
    });

    describe("installed behavior without callback", () => {
        beforeEach(() => $(".slide-this").slider());

        it("should update its CSS transform correctly", transformUpdateTest);
        it("should update the slider position correctly", sliderUpdateTest);
    });
});
