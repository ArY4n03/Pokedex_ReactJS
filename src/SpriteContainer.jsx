
function SpriteContainer(props){

    const sprites = props.sprite_data
    const sprites_keys = Object.keys(sprites)
    const elements = []
    console.log(sprites_keys)

    for (const index in sprites_keys){
 
        if(typeof sprites[sprites_keys[index]] != 'object' && sprites[sprites_keys[index]] != null)
        {
            elements.push((<img className="spites" key={index} src={sprites[sprites_keys[index]]}></img>))
        }
    }
    return(
        <>
        <h5>Sprites</h5>
        {elements}
        </>
    );
}

export default SpriteContainer;