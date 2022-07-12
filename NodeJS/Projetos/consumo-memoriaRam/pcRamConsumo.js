// módulo 'os' traz várias infos do sistema do pc
const os = require('os');

setInterval( () => {
    
    // desestrutando os objetos de 'os'
    const { arch, platform, totalmem, freemem } = os;

    const tRAM = ( totalmem() / (1024 ** 3)).toFixed(2);
    const fRAM = ( freemem() / (1024 ** 3)).toFixed(2);
    const usadoRAM = ( ( fRAM / tRAM ) * 100).toFixed(2);

    const stats = {
        Sistema: platform(),
        Arquitetura: arch() === 'x64' ? 'x64 = 64 bits' : 'x86 = 32 bits', 
        TotalRAM: `${tRAM} GB`,
        FreeRAM: `${fRAM} GB`,
        UsoRAM: `${usadoRAM} %`
    }

    console.clear();
    console.table( stats );
    exports.stats = stats;
}, 1000);