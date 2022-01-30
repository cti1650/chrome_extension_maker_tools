export declare type ManifestType = (file?: string) => {
    getJson: () => any;
    setJson: (output: any) => void;
    origin: any;
    manifest: any;
    update: (updateType?: string) => void;
    save: () => void;
    file: string;
};
export declare type MakeExtentionImageType = (file?: string, option?: {}) => Promise<{
    out: (file?: string) => any;
    createIcon: (option?: {}) => Promise<void>;
    createIcons: (option: any) => void;
    resizeImage: (option?: {}) => void;
    resizeImages: (option: any) => void;
    imageSizeType: {};
}>;
