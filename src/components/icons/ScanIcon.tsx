import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_10_343)" fill="#fff">
        <Path d="M30 0c5.15 0 10.3-.01 15.44 0 7.03.02 12.76 4.63 14.22 11.45.22 1.05.32 2.14.32 3.21.02 10.21.02 20.41.01 30.62 0 6.96-4.44 12.69-11.09 14.27-1.17.28-2.4.38-3.6.39-10.21.03-20.41.03-30.62.01C7.32 59.94 1.56 55.17.22 47.96c-.15-.81-.2-1.65-.21-2.48C0 35.15 0 24.81 0 14.47.02 7.01 5.47.92 12.87.07 13.51 0 14.17 0 14.82 0H30zm-.04 55.64c5.19 0 10.38.03 15.58 0 5.68-.04 10.09-4.35 10.12-10.01.06-10.43.06-20.86 0-31.29-.03-5.64-4.42-9.98-10.05-10.01-10.41-.04-20.81-.04-31.22 0-5.73.02-10.06 4.47-10.06 10.2v30.88c0 .71.05 1.44.2 2.14 1 4.81 5 8.05 9.99 8.08 5.15.03 10.29 0 15.44 0v.01z" />
        <Path d="M27.82 32.14h-17.8c-1.59 0-2.64-1.35-2.19-2.8.28-.92 1.1-1.5 2.16-1.51h17.83v-.81-16.18c0-1.55.93-2.52 2.33-2.44 1.01.06 1.87.87 1.97 1.88.03.27.02.54.02.81v16.74H49.9c1.27 0 2.21.77 2.32 1.88.15 1.37-.81 2.43-2.24 2.43-3.33.01-6.65 0-9.98 0h-7.86v.81c0 5.39.02 10.79-.02 16.18 0 .58-.23 1.24-.55 1.73-.48.72-1.3.87-2.12.66-.79-.2-1.34-.73-1.53-1.55-.07-.32-.09-.67-.09-1V33.06v-.92h-.01z" />
        <Path d="M7.92 17.37c0-1.24-.01-2.47 0-3.71.04-3.12 2.21-5.27 5.33-5.28h7.28c3.14.01 5.33 2.2 5.35 5.35.01 2.43.01 4.85 0 7.28-.02 3.09-2.23 5.31-5.31 5.33-2.45.01-4.9.01-7.35 0-3.06-.02-5.25-2.19-5.3-5.26-.02-1.24 0-2.47 0-3.71zm8.94-4.67h-3.57c-.78 0-1.05.27-1.05 1.06v7.2c0 .78.29 1.06 1.06 1.06h7.2c.75 0 1.06-.31 1.07-1.07v-7.2c0-.76-.3-1.04-1.07-1.05h-3.64zM17.01 51.58c-1.37 0-2.74.04-4.11 0-2.58-.09-4.75-2.25-4.8-4.82a201.3 201.3 0 010-8.15c.05-2.68 2.21-4.88 4.91-4.94 2.69-.07 5.39-.07 8.09 0 2.72.07 4.88 2.28 4.93 5.01.05 2.63.04 5.26 0 7.88-.04 2.76-2.21 4.94-4.97 5.03-1.35.04-2.7 0-4.04 0l-.01-.01zm-4.62-8.94v3.57c0 .79.26 1.06 1.04 1.07h7.21c.78 0 1.07-.29 1.08-1.05v-7.21c0-.76-.31-1.07-1.06-1.08h-7.21c-.77 0-1.06.29-1.06 1.06-.01 1.21 0 2.42 0 3.64zM42.97 51.59c-1.35 0-2.7.04-4.04 0-2.74-.09-4.9-2.25-4.94-4.97-.04-2.65-.04-5.3 0-7.95a5.06 5.06 0 014.93-5c2.69-.06 5.39-.07 8.09 0 2.71.07 4.88 2.3 4.92 5.02.04 2.63.04 5.26 0 7.88-.04 2.75-2.21 4.93-4.97 5.02-1.32.04-2.65 0-3.98 0h-.01zm-.02-4.3h3.64c.73 0 1.02-.3 1.02-1.03v-7.27c0-.71-.32-1.02-1.03-1.03h-7.27c-.72 0-1.01.31-1.01 1.04v7.27c0 .74.28 1.01 1.02 1.02 1.21.01 2.42 0 3.64 0h-.01zM33.84 17.35c0-1.26-.02-2.52 0-3.77.05-3 2.22-5.17 5.22-5.19 2.49-.02 4.99-.02 7.48 0 3.02.02 5.23 2.22 5.25 5.24.02 2.49.02 4.99 0 7.48-.03 3-2.26 5.22-5.27 5.23-2.49.02-4.99.02-7.48 0-2.94-.02-5.15-2.21-5.2-5.15-.02-1.28 0-2.56 0-3.84zm8.99-4.65h-3.57c-.86 0-1.11.25-1.11 1.13v7.07c0 .86.27 1.12 1.13 1.12h7.07c.83 0 1.12-.3 1.12-1.14v-7.07c0-.84-.28-1.11-1.14-1.11h-3.5z" />
      </G>
      <Defs>
        <ClipPath id="clip0_10_343">
          <Path fill="#fff" d="M0 0H60V59.97H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;