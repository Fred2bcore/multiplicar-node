const argv = require('./Config/yargs').argv;

const { createFile, listTable } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listTable(argv.base, argv.limite)
        break;
    case 'crear':
        createFile(argv.base, argv.limite)
            .then(file => console.log(`Archivo creado: ${file}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no Reconocido!');
        break;
}