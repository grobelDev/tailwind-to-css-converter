import React, { Fragment } from 'react';
// import tailwindDict from './tailwindDict';
import tailwindDict from './tailwindDict.json';

export default function classStringToTailwindV2(classString) {
  let classes = [];
  let smallClasses = [];
  let mediumClasses = [];
  let largeClasses = [];
  let xlClasses = [];

  let classStringArray = classString.split(' ');
  for (let i = 0; i < classStringArray.length; i++) {
    let classString = classStringArray[i];
    console.log(classString);
    if (classString.includes('sm:')) {
      smallClasses.push(classString.split(':')[1]);
    } else if (classString.includes('md:')) {
      mediumClasses.push(classString.split(':')[1]);
    } else if (classString.includes('lg:')) {
      largeClasses.push(classString.split(':')[1]);
    } else if (classString.includes('xl:')) {
      xlClasses.push(classString.split(':')[1]);
    } else {
      classes.push(classString);
    }
  }

  console.log(classes);

  return (
    <Fragment>
      {classes.map(string => {
        return tailwindDictCheckerV2(string);
      })}
      {smallClasses.length > 0 ? (
        <ClassesLayout size={'sm'}>
          {smallClasses.map(string => {
            return tailwindDictCheckerV2(string);
          })}
        </ClassesLayout>
      ) : null}
      {mediumClasses.length > 0 ? (
        <ClassesLayout size={'md'}>
          {mediumClasses.map(string => {
            return tailwindDictCheckerV2(string);
          })}
        </ClassesLayout>
      ) : null}
      {largeClasses.length > 0 ? (
        <ClassesLayout size={'lg'}>
          {largeClasses.map(string => {
            return tailwindDictCheckerV2(string);
          })}
        </ClassesLayout>
      ) : null}
      {xlClasses.length > 0 ? (
        <ClassesLayout size={'xl'}>
          {xlClasses.map(string => {
            return tailwindDictCheckerV2(string);
          })}
        </ClassesLayout>
      ) : null}
    </Fragment>
  );
}

function ClassesLayout({ size, children }) {
  let classDict = { sm: 640, md: 768, lg: 1024, xl: 1280 };

  return (
    <Fragment>
      <p>{`@media (min-width: ${classDict[size]}px) {`}</p>
      <div className='px-4'>{children}</div>
      <p>{`}`}</p>
    </Fragment>
  );
}

function tailwindDictCheckerV2(string) {
  if (tailwindDict[string]) {
    let result = tailwindDict[string].split(';').map(result => {
      if (result != '') {
        return <p>{result + ';'}</p>;
      }
    });
    return result;
  } else {
    if (string != '') {
      return (
        <p className='text-orange-600'>{`${string} is not recorded/invalid`}</p>
      );
    }
  }
}

// function tailwindDictChecker(string) {
//   if (tailwindDict[string]) {
//     return tailwindDict[string];
//   } else {
//     return '';
//   }
// }

// function tailwindDictCheckerHelper(string) {}

// function ClassToTailwindHelper(classString) {
//   let newText = classString.split('\n').map((item, i) => {
//     return <p key={i}>{item}</p>;
//   });
//   return <Fragment>{classString.split(' ')}</Fragment>;
// }

// function ClassToTailwind(classString) {
//   let newText = classString.split(' ').map((item, i) => {
//     return (
//       <Fragment>
//         {/* <p>{'width: 100%;'}</p> */}
//         {tailwindDictChecker(item)
//           .split(';')
//           .map(item => {
//             if (item != '') {
//               return <p>{item + ';'}</p>;
//             }
//           })}
//       </Fragment>
//     );
//   });

//   return <Fragment>{newText}</Fragment>;
// }
// function SmallClassesLayout({ children }) {
//   return (
//     <Fragment>
//       <p>{`@media (min-width: 1280px) {`}</p>
//       <div className='px-4'>{children}</div>
//       <p>{`}`}</p>
//     </Fragment>
//   );
// }
