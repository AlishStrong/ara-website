type ArticleImageProps = {
  image: string,
  additionalClasses?: string
}

const ArticleImage = ({ image, additionalClasses }: ArticleImageProps) => {
  return (
    <img src={image} className={'w-full float-left mb-4 sm:mr-4 sm:max-w-[16em] ' + additionalClasses}></img>
  );
};

export default ArticleImage;
