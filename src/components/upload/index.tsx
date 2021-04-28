import React, { useCallback, useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";

import { UploadContainer, UploadText } from "./styled";

export interface UploadableFile {
    file: File;
    errors: FileError[];
}

export const UploadAudio: React.FC = () => {
    const [files, setFiles] = useState<UploadableFile[]>([]);

    const onDrop = useCallback(
        (acceptedFiles: File[], rejFiles: FileRejection[]) => {
            const mappedAcceptedFiles = acceptedFiles.map((file) => ({
                file,
                errors: [],
            }));
            setFiles((prev) => [...prev, ...mappedAcceptedFiles, ...rejFiles]);
        },
        [],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: ".wav, .mp3",
    });

    return (
        <UploadContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <UploadText>
                {isDragActive
                    ? `Drop the files here ...`
                    : `Drag 'n' drop some files here, or click to select files`}
            </UploadText>
            <h3>{JSON.stringify(files)}</h3>
        </UploadContainer>
    );
};
