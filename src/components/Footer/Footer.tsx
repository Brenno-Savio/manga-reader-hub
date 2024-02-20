import Link from 'next/link';

const Footer = () => {
  const alphabet = [
    '#',
    '0-1',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return (
    <footer className="">
      <div className="bg-primary py-3">
        <ul className="text-tertiary-light flex flex-wrap items-center justify-center">
          <li className="px-2">Termos de Uso</li>
          <li className="px-2">Contato</li>
          <li className="px-2">Lista de A-Z</li>
          <li className="px-2">F.A.Q</li>
          <li className="px-2">DMCA</li>
        </ul>
      </div>
      <div className="dark:bg-quaternary dark:text-tertiary-light flex items-center justify-center bg-gray-300 py-6">
        <p className="px-2 text-xl">Lista de A-Z</p>
        <p className="px-2 text-xl">|</p>
        <p className="px-2 text-sm">
          Procurando séries alfabeticamente ordenadas de A para Z.
        </p>
      </div>
      <div className="dark:bg-quaternary flex justify-center bg-gray-300 py-6">
        {alphabet.map((value) => (
          <Link
            href={'/'}
            className="bg-primary border-quaternary dark:border-tertiary-light text-tertiary-light m-0.5 justify-center rounded border p-2 py-0.5"
          >
            {value}
          </Link>
        ))}
      </div>
      <div className='dark:bg-quaternary bg-gray-300 justify-center text-center items-center'>
        <p className='text-xs px-80 p-9 items-center text-tertiary-light'>Direitos autorais e marcas para mangás, e outros materiais promocionais são mantidos por seus respectivos proprietários e a sua utilização é permitida nos termos da cláusula de uso justo da Lei de Direitos Autorais Americana. (Copyrights and trademarks for the manga, and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the U.S. Copyright Law.)</p>
      </div>
    </footer>
  );
};

export default Footer;
