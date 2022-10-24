type ArticleImageProps = {
  image: string
}

const ArticleImage = ({ image }: ArticleImageProps) => {
  return (
    <img src={image} className='w-full float-left mb-4 sm:mr-4 sm:max-w-[16em]'></img>
  );
};

export default ArticleImage;
