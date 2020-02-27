describe('#getPersons', () => {

	it('returned observable', () => {
		service.getPersons()
			.subscribe(person => {
				expect(person[0].id).toEqual('1');
				expect(person[0].name).toEqual('John');
				expect(person[0].position).toEqual('Developer');

				expect(person[1].id).toEqual('2');
				expect(person[1].name).toEqual('Carla');
				expect(person[1].position).toEqual('COO');
			})
	});
})