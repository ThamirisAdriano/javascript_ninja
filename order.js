let podcasts = [
    {pod:'inédita pamonha', newPosition:0, old_position: 0},
    {pod:'lendo com o Clóvis', newPosition:1 ,old_position: 1},
    {pod:'partiu, pensar', newPosition:2 ,old_position: 2},
]

function list_podcasts(pod, newPosition) {
    
   
    return pod[newPosition]
    
}

console.log(list_podcasts(podcasts,2))