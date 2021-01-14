export default async function cacheImages (imgArray, setIsLoading) {

    const promises = await imgArray.map((img) => {
        return new Promise(function(resolve,reject) {
            const img = new Image();

            img.src = img;
            img.onload = resolve();
            img.onerror = reject();
            // setTimeout(() => {
            //     resolve()
            // }, (4000));
        })
    })
    
    await Promise.all(promises);
    setIsLoading(false);
}