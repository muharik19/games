function getPilihanComputer()
{
	const comp = Math.random();
	if( comp < 0.34 /* 1 : 3 */ ) return 'gajah';
	if( comp >= 0.34 && comp < 0.67 /* 2 : 3 */ ) return 'orang';
	return 'semut';
}

function getHasil(comp, player)
{
	if( player == comp ) return 'SERI!';
	if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function()
// {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function()
// {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function()
// {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	console.log('comp : ' + pilihanComputer);
// 	console.log('player : ' + pilihanPlayer);
// 	console.log('hasil : ' + hasil);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

function putar()
{
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function()
	{
		if( new Date().getTime() - waktuMulai > 1000 )
		{
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if( i == gambar.length ) i = 0;
	}, 100);
}

const pilihan = document.querySelectorAll('li img');
// console.log(pilihan);
pilihan.forEach(function(pil)
{
	// console.log(pil);
	pil.addEventListener('click', function()
	{
		// console.log(pil);
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		const scorePlayer = document.querySelector('.score-player');
		const scoreComputer = document.querySelector('.score-computer');

		putar();

		setTimeout(function()
		{
			const imgComputer = document.querySelector('.img-computer');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
			// score
			let win = 1;
			let lose = 1;
			if( hasil == 'MENANG!' )
			{
				scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML) + 1;
			}
			else if( hasil == 'KALAH!' )
			{
				scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML) + 1;
			}
		}, 1000);
	});
});
