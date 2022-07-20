// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import Poll from 'mdi-material-ui/Poll'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import Table from 'src/views/dashboard/Table'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import Trophy from 'src/views/dashboard/Trophy'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item md={4} xs={12}>
          <Trophy />
        </Grid>
        <Grid item md={8} xs={12}>
          <StatisticsCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <WeeklyOverview />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <TotalEarning />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                color="success"
                icon={<Poll />}
                stats="$25.6k"
                subtitle="Weekly Profit"
                title="Total Profit"
                trendNumber="+42%"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                color="secondary"
                icon={<CurrencyUsd />}
                stats="$78"
                subtitle="Past Month"
                title="Refunds"
                trend="negative"
                trendNumber="-15%"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                icon={<BriefcaseVariantOutline />}
                stats="862"
                subtitle="Yearly Project"
                title="New Project"
                trend="negative"
                trendNumber="-18%"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                color="warning"
                icon={<HelpCircleOutline />}
                stats="15"
                subtitle="Last Week"
                title="Sales Queries"
                trend="negative"
                trendNumber="-18%"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <SalesByCountries />
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
