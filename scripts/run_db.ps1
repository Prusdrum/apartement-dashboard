$container_name = "apartement_db"
$image = "mongo:3.4"

docker container run --publish 27017:27017 --rm --detach --volume mongodb:/data/db --name $container_name $image