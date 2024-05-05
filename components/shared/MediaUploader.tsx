import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { CldUploadWidget } from 'next-cloudinary';

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    toast({
      title: 'Image uploaded successfully',
      description: '1 credit was deducted from your account',
      duration: 5000,
      className: 'success-toast',
    });
  };

  const onUploadErrorHandler = (error: any) => {
    toast({
      title: 'Something went wrong while uploading the image',
      description: 'Please try again later',
      duration: 5000,
      className: 'error-toast',
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="francoiscoding-imaginify"
      options={{
        multiple: false,
        resourceType: 'image',
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text0dark-600">Original</h3>

          {publicId ? <>HERE IS THE IMAGE</> : <div>HERE IS NO IMAGE</div>}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
