import {$authHost, $host} from "./index";


// type
export const createType = async type => {
    const {data} = await $authHost.post('/api/type/create', type)
    return data
}

export const getTypes = async (typeId, brandId, page, limit = 5) => {
    const {data} =  await $host.get('/api/type/getAll')
    return data
}

// brand
export const createBrand = async brand => {
    const {data} = await $authHost.post('/api/brand/create', brand)
    return data
}

export const getBrands = async () => {
    const {data} =  await $host.get('/api/brand/getAll')
    return data
}

// device

export const createDevice = async device => {
    const {data} = await $authHost.post('/api/device/create', device)
    return data
}

export const getDevices = async (typeId, brandId, page, limit) => {
    const {data} =  await $host.get('/api/device/getAll', {params: {
            typeId, brandId, page, limit
        }})
    return data
}
export const getOneDevice = async (id) => {
    const {data} =  await $host.get(`/api/device/getOne/${id}`)
    return data
}
