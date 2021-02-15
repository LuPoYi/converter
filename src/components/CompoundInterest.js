import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Divider from '@material-ui/core/Divider'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(styles)

const CompoundInterest = () => {
  const classes = useStyles()
  const [compoundInterval, setCompoundInterval] = useState('yearly')
  const [initialBalance, setInitialBalance] = useState(1000)
  const [annualPercentageRate, setAnnualPercentageRate] = useState(20)
  const [year, setYear] = useState(5)
  const [month, setMonth] = useState(0)
  const [result, setResult] = useState({
    totalInterest: 0,
    annualPercentageYield: 0,
    finalBalance: 0,
  })

  const handleCompoundIntervalOnChange = (event) => {
    setCompoundInterval(event.target.value)
  }

  const handleInitialBalanceOnChange = (event) => {
    setInitialBalance(event.target.value)
  }

  const handleAnnualPercentageRateOnChange = (event) => {
    setAnnualPercentageRate(event.target.value)
  }

  const handleYearOnChange = (event) => {
    setYear(event.target.value)
  }

  const handleMonthOnChange = (event) => {
    setMonth(event.target.value)
  }

  const calculateNextRoundProfit = (amount, rate) => amount * (1 + rate)

  useEffect(() => {
    let finalBalance = initialBalance
    for (let y = 0; y < year; y++) {
      finalBalance = calculateNextRoundProfit(finalBalance, annualPercentageRate / 100)
    }

    const totalInterest = finalBalance - initialBalance
    const annualPercentageYield = (totalInterest / year / initialBalance) * 100
    setResult({
      totalInterest: totalInterest.toFixed(2),
      annualPercentageYield: annualPercentageYield.toFixed(2),
      finalBalance: finalBalance.toFixed(2),
    })
  }, [compoundInterval, initialBalance, annualPercentageRate, year, month])

  return (
    <Card>
      <CardHeader color="warning">
        <h4 className={classes.cardTitleWhite}>Compound Interest Calculator</h4>
      </CardHeader>
      <CardBody>
        <TextField
          label="Initial Balance"
          variant="outlined"
          onChange={handleInitialBalanceOnChange}
          value={initialBalance}
        />
        <TextField
          label="Annual Percentage Rate(APR)"
          variant="outlined"
          onChange={handleAnnualPercentageRateOnChange}
          value={annualPercentageRate}
        />

        <TextField
          select
          label="Compound Interval"
          helperText="Please select compound interval"
          value={compoundInterval}
          onChange={handleCompoundIntervalOnChange}
          variant="outlined">
          {[
            { value: 'hourly', label: 'Hourly' },
            { value: 'daily', label: 'Daily' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'yearly', label: 'Yearly' },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField label="Year" variant="outlined" onChange={handleYearOnChange} value={year} />
        <TextField label="Month" variant="outlined" onChange={handleMonthOnChange} value={month} />
      </CardBody>
      <Divider light />
      <CardBody>{JSON.stringify(result)}</CardBody>
    </Card>
  )
}

export default CompoundInterest
