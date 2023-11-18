class Geocoder{
  url = 'https://geocode-maps.yandex.ru/1.x/?apikey=3077528e-7089-4623-a1df-7121ad860030';

	public getResourse = async (address: string) : Promise<any>  => {
		const formatedAddress = this.formatAddress(address);

		const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=3077528e-7089-4623-a1df-7121ad860030&geocode=${formatedAddress}&format=json`);
		
		if (!res.ok) throw new Error('Map is not  avaible');

		return await res.json();
	}

	private formatAddress = (address : string) : string => {
		const splittedAddres = address.split(' ');
		const newAddres = splittedAddres.join(',+');
		return newAddres;
	}
}

export default Geocoder;