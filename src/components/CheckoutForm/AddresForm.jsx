import React, {useState, useEffect} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'

import {commerce} from '../../lib/commerce'

const AddresForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setSubdivisions] = useState([])
    const [shippingSubdivision, setSubdivision] = useState('')
    const [shippingOptions, setOptions] = useState([])
    const [shippingOption, setOption] = useState('')
    
    const countries = Object.entries(shippingCountries).map(([code, name]) =>({id:code, label:name}))
    console.log(countries)

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
      };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    const methods = useForm()
    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Addres</Typography>
            <FormProvider {...methods}>
                <from onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                        <FormInput required name='lastName' label='Last Name' />
                        <FormInput required name='address' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='City' label='City' />
                        <FormInput required name='ZIP' label='ZIP / Postal Code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                {item.label}
                                </MenuItem>
                                 ))}
                            </Select>
                        </Grid>
                    </Grid>
                </from>
            </FormProvider>
        </>
    )
}

export default AddresForm
