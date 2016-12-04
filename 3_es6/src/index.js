//Mengimpor modul
import greetings from './greetings'

let data = [{name: 'Doni', city: 'Cianjur'}, {name: 'Mina', city: 'Jember'}, {name: 'Riki', city: 'Lhoksemauwe'}];

document.write('<div class="content dashedBox">')
//Penggunaan fat arrow
data.map(item => {
	document.write(greetings(item.name, item.city));
});
document.write('</div>')