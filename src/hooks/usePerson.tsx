import { useState } from "react"

const usePerson = () => {
    const [name, setName] = useState('test')
    const [role, setRole] = useState('developer')

    const onChange = (key: 'name' | 'role', value: string) => {
        if(key === 'name') {
            setName(value)
        } else if (key === 'role') {
            setRole(value)
        } else {
            // handle error
        }
    }

    return {
        name, role, onChange
    }
 }

export default usePerson