#!/usr/bin/env node
import { MakeExtentionImage } from "../../class";
import { Manifest } from "../../class";
MakeExtentionImage('extensions/icons/icon.png').then(({createIcons})=>{
    const sizeList = [128, 64, 32];
    createIcons({
        name: 'extensions/icons/icon',
        sizeList: sizeList,
    });
    const { manifest, save, update } = Manifest();
    sizeList.map((size) => {
        switch (manifest.manifest_version) {
        case 2:
            if (manifest.browser_action) {
            if (!manifest.browser_action.default_icon)
                manifest.browser_action.default_icon = {};
            manifest.browser_action.default_icon[size.toString()] =
                'icons/icon_' + size.toString() + '.png';
            }
            if (manifest.page_action) {
            if (!manifest.page_action.default_icon)
                manifest.page_action.default_icon = {};
            manifest.page_action.default_icon[size.toString()] =
                'icons/icon_' + size.toString() + '.png';
            }
            break;
        case 3:
            if (manifest.action) {
            if (!manifest.action.default_icon) manifest.action.default_icon = {};
            manifest.action.default_icon[size.toString()] =
                'icons/icon_' + size.toString() + '.png';
            }
            break;
        }
    });
    update();
    save();
    // resizeImages({
    //   background: "#222222",
    //   typeList: [
    //     imageSizeType.screenshot,
    //     imageSizeType.screenshot_big,
    //     imageSizeType.promotion,
    //     imageSizeType.promotion_big,
    //     imageSizeType.promotion_marquee,
    //   ],
    // });
    
});
