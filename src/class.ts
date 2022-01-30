import { MakeExtentionImageType, ManifestType } from "./types";

export const Manifest:ManifestType = (file = "extensions/manifest.json") => {
  const option = require("./extconfig.json");
  const fs = require("fs");
  const getJson = () => {
    const jsonObject = JSON.parse(fs.readFileSync(file, "utf8"));
    return { ...jsonObject };
  };
  const setJson = (output) => {
    fs.writeFileSync(file, JSON.stringify(output, null, "  "));
    manifest = { ...output };
  };
  const origin = getJson();
  let manifest = getJson();
  const update = (updateType = "patch") => {
    if (manifest.version) {
      const version_arr = manifest.version.split(".");
      switch (updateType.toLowerCase()) {
        case "major":
          switch (Number(version_arr.length)) {
            case 4:
              version_arr[0] = Number(version_arr[0]) + 1;
              version_arr[1] = 0;
              version_arr[2] = 0;
              version_arr[3] = 0;
              break;
            case 3:
              version_arr[0] = Number(version_arr[0]) + 1;
              version_arr[1] = 0;
              version_arr[2] = 0;
              break;
            case 2:
              version_arr[0] = Number(version_arr[0]) + 1;
              version_arr[1] = 0;
              version_arr.push(0);
              break;
            case 1:
              version_arr[0] = Number(version_arr[0]) + 1;
              version_arr.push(0);
              version_arr.push(0);
              break;
            default:
          }
          break;
        case "minor":
          switch (Number(version_arr.length)) {
            case 4:
              version_arr[1] = Number(version_arr[1]) + 1;
              version_arr[2] = 0;
              version_arr[3] = 0;
              break;
            case 3:
              version_arr[1] = Number(version_arr[1]) + 1;
              version_arr[2] = 0;
              break;
            case 2:
              version_arr[1] = Number(version_arr[1]) + 1;
              version_arr.push(0);
              break;
            case 1:
              version_arr[1] = Number(version_arr[1]) + 1;
              version_arr.push(0);
              break;
            default:
          }
          break;
        case "patch":
          switch (Number(version_arr.length)) {
            case 4:
              version_arr[2] = Number(version_arr[2]) + 1;
              version_arr[3] = 0;
              break;
            case 3:
              version_arr[2] = Number(version_arr[2]) + 1;
              break;
            case 2:
              version_arr.push(1);
              break;
            case 1:
              version_arr.push(0);
              version_arr.push(1);
              break;
            default:
          }
          break;
        case "release":
          switch (Number(version_arr.length)) {
            case 4:
              version_arr[0] = 1;
              version_arr[1] = 0;
              version_arr[2] = 0;
              version_arr[3] = 0;
              break;
            case 3:
              version_arr[0] = 1;
              version_arr[1] = 0;
              version_arr[2] = 0;
              break;
            case 2:
              version_arr[0] = 1;
              version_arr[1] = 0;
              version_arr.push(0);
              break;
            case 1:
              version_arr[0] = 1;
              version_arr.push(0);
              version_arr.push(0);
              break;
            default:
          }
          break;
        default:
      }
      let version = version_arr.join(".");
      if (origin.version !== version) {
        console.log("updata version : " + origin.version + " -> " + version);
        manifest.version = version;
      }
    }
  };
  const save = () => {
    if (origin.version !== manifest.version) {
      setJson(manifest);
    }
  };
  return { getJson, setJson, origin, manifest, update, save, file };
};

export const MakeExtentionImage: MakeExtentionImageType = async (
  file = "scripts/icon.png",
  option = {}
) => {
  const sharp = require("sharp");
  const image = sharp(file);
  const imageSizeType = {
    screenshot: "screenshot",
    screenshot_big: "screenshot_big",
    promotion: "promotion",
    promotion_big: "promotion_big",
    promotion_marquee: "promotion_marquee",
  };
  const out = (file = "scripts/icon_out.png") => {
    return image
      .toFile(file)
      .then((info) => {
        console.log(info);
        return info;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  const resizeImages = (option) => {
    const defaultOption = {
      background: "#ffffff",
      name: "scripts/image",
      typeList: ["screenshot_big"],
    };
    const baseOption = { ...defaultOption, ...option };
    baseOption.typeList.map((type) => {
      resizeImage({ ...baseOption, type: type });
    });
  };

  const createIcons = (option) => {
    const defaultOption = {
      background: "#ffffff",
      name: "scripts/icon",
      sizeList: [128],
    };
    const baseOption = { ...defaultOption, ...option };
    baseOption.sizeList.map((size) => {
      createIcon({ ...baseOption, size: size });
    });
  };

  const resizeImage = (option = {}) => {
    const outputImage = image.clone();
    const defaultOption = {
      width: 1280,
      height: 800,
      background: "#ffffff",
      name: "scripts/image",
      type: "screenshot_big",
    };
    const baseOption = { ...defaultOption, ...option };
    switch (baseOption.type) {
      case "screenshot_big":
        baseOption.width = 1280;
        baseOption.height = 800;
        break;
      case "screenshot":
        baseOption.width = 640;
        baseOption.height = 400;
        break;
      case "promotion_big":
        baseOption.width = 920;
        baseOption.height = 680;
        break;
      case "promotion":
        baseOption.width = 440;
        baseOption.height = 280;
        break;
      case "promotion_marquee":
        baseOption.width = 1400;
        baseOption.height = 560;
        break;
      default:
    }
    outputImage
      .resize({
        width: baseOption.width,
        height: baseOption.height,
        fit: "contain",
        background: baseOption.background,
      })
      .toFile(`${baseOption.name}_${baseOption.width}x${baseOption.height}.png`)
      .then((info) => {
        console.log(info);
        return info;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  const createIcon = async (option = {}) => {
    const iconImage = image.clone();
    const defaultOption = {
      trim: true,
      square: true,
      extend: 0.05,
      size: 128,
      name: "scripts/icon",
      background: "#ffffff",
    };
    const baseOption = { ...defaultOption, ...option };
    let originMeta = null;
    if (baseOption.trim) {
      iconImage.trim(50);
    }
    await iconImage.metadata().then(function (metadata) {
      originMeta = { ...metadata };
      switch (metadata.format) {
        case "jpeg":
        case "jpg":
          iconImage.png();
          break;
        case "png":
          break;
        default:
          iconImage.png();
      }
      if (!metadata.hasAlpha) {
        iconImage.ensureAlpha();
      }
      // console.log(metadata.background);
      const baseSize = Math.max(metadata.width, metadata.height);
      if (baseOption.square) {
        iconImage.resize({
          width: baseSize,
          height: baseSize,
          fit: "contain",
          background: baseOption.background || "#ffffff",
        });
      }
      if (baseOption.extend > 0) {
        const baseExtendSize = Math.floor(baseSize * baseOption.extend);
        iconImage.extend({
          top: baseExtendSize,
          bottom: baseExtendSize,
          left: baseExtendSize,
          right: baseExtendSize,
          background: baseOption.background || "#ffffff",
        });
      }
    });
    iconImage.raw().toBuffer((err, data, info) => {
      const length = data.length;
      const min = 0.7;
      for (let i = 3; i < length; i += 4)
        if (
          data[i - 1] >= Math.floor(data[2] * min) &&
          data[i - 2] >= Math.floor(data[1] * min) &&
          data[i - 3] >= Math.floor(data[0] * min)
        ) {
          data[i] = 0 * 255;
        }
      if (baseOption.size > 0) {
        sharp(data, {
          raw: { width: info.width, height: info.height, channels: 4 },
        })
          .resize({
            width: null,
            height: baseOption.size,
          })
          .toFile(`${baseOption.name}_${baseOption.size}.png`);
      } else {
        sharp(data, {
          raw: { width: info.width, height: info.height, channels: 4 },
        }).toFile(`${baseOption.name}_${baseOption.size}.png`);
      }
    });
  };
  return {
    out,
    createIcon,
    createIcons,
    resizeImage,
    resizeImages,
    imageSizeType,
  };
};

// すぐ分かる！sharp（node.js）で画像を編集する実例・全35件
// https://blog.capilano-fw.com/?p=5744#i-4

//
// https://sharp.pixelplumbing.com/api-input

// 【Node.js】 画像処理モジュールsharpの使い方を網羅してみました
// https://note.affi-sapo-sv.com/nodejs-sharp.php

// Chrome拡張機能の作り方
// https://blog.members.co.jp/article/37615
