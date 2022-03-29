import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    optionss = {receiveShadow:true,castShadow:true}
){
    const {receiveShadow,castShadow} = optionss
    return new Promise((resolve,reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'Lucario'
                obj.position.y = 1
                obj.position.x = -1 
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function(child){
                    if(child.isMesh){
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                resolve(obj)
            },
            undefined,
            function(error){
                reject(error)
            }
        )
    })
}