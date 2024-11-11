// import {
//     getPalette,
//     getAverageColor,
// } from "@somesoap/react-native-image-palette";
// import { useEffect, useState } from "react";

// export const usePlayerBackground = (imageUrl: string) => {
//     const [average, setAverage] = useState<string>("");
//     const [palette, setPalette] = useState<string>("");

//     useEffect(() => {
//         getAverageColor(imageUrl).then((colors) =>
//             setAverage(colors as unknown as string)
//         );
//         getPalette(imageUrl).then((colors) =>
//             setPalette(colors.vibrant as unknown as string)
//         );
//     }, [imageUrl]);
//     return { imageColors: { average, palette } };
// };
