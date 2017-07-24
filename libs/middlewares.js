import bodyParser from "body-parser";

module.exports = app => {
	app.set("port", 3000);
	app.set("json spaces", 4); //formata e tabula de forma amigável o json
	app.use(bodyParser.json());
	app.use(app.auth.initialize());
	app.use((req, res, next) => {
		delete req.body.id;
		next();
	})
}
