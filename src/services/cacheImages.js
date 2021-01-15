export default async function cacheImages (imgArray, setIsLoading) {

   await imgArray.forEach((picture) => {
        new Image().src = picture;
        
    });
    setIsLoading(false);
    
}