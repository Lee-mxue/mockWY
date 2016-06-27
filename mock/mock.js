module.exports = {
	rules : [
		{
			pattern:/\/api\/getNewslist.php\?rtype=origin$/,
			respondwith:'./audioData.json'
		}
	]
};

