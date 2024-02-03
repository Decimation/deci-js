const c = document.getElementById('watched-threads').children;
for (let x of c) {
	//console.log(x);
	let q = x.children[1];
	console.log(`${q.title} - ${q.href}`);
}
