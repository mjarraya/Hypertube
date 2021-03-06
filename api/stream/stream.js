/**
 * Created by opichou on 11/21/16.
 */
 /* eslint semi: ["error", "never"]*/

import MovieFile	from './movieFile'

const streamRoute = (req, res) => {
	console.log(req.query.path)
	const stream = new MovieFile(req, res).stream()
	stream.on('data', data => {
		res.write(data)
	})
	stream.on('end', () => {
		res.end()
	})
	stream.on('error', e => {
		console.log(e)
	})
}

export default streamRoute
