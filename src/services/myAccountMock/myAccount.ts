import MyPicture from '../../public/myPicture.png';

export type TweetsShape = {
    tweet: string;
    User: {
      name: string;
      id: number;
      img?: string;
    };
  };

const myAccount: TweetsShape[] = [
  {
    tweet: 'Bem vindo ao meu site!',
    User: {
      name: 'Lucas Maieski Marques',
      id: 114,
      img: MyPicture.src,
    },
  },
  {
    tweet: `Linkedin: https://www.linkedin.com/in/lucasmaieski/
    \n
    Github: https://github.com/Lucky-ta`,
    User: {
      name: 'Lucas Maieski Marques',
      id: 114,
      img: MyPicture.src,
    },
  },
  {
    tweet: 'Portfólio: https://lucasmaieski.vercel.app/',
    User: {
      name: 'Lucas Maieski Marques',
      id: 114,
      img: MyPicture.src,
    },
  },
];

export default myAccount;
