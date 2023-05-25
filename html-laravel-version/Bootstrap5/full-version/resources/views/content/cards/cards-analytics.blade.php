@extends('layouts/layoutMaster')

@section('title', 'Cards Analytics- UI elements'
)
@section('vendor-style')
<link rel="stylesheet" href="{{asset('assets/vendor/libs/apex-charts/apex-charts.css')}}" />
@endsection

@section('vendor-script')
<script src="{{asset('assets/vendor/libs/apex-charts/apexcharts.js')}}"></script>
@endsection

@section('page-script')
<script src="{{asset('assets/js/cards-analytics.js')}}"></script>
@endsection

@section('content')

<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">UI Elements /</span> Cards Analytics
</h4>
<div class="row">
  <!-- Earning Reports -->
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <div class="card-header pb-0 d-flex justify-content-between mb-lg-n4">
        <div class="card-title mb-0">
          <h5 class="mb-0">Earning Reports</h5>
          <small class="text-muted">Weekly Earnings Overview</small>
        </div>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="earningReportsId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsId">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-4 d-flex flex-column align-self-end">
            <div class="d-flex gap-2 align-items-center mb-2 pb-1 flex-wrap">
              <h1 class="mb-0">$468</h1>
              <div class="badge rounded bg-label-success">+4.2%</div>
            </div>
            <small class="text-muted">You informed of this week compared to last week</small>
          </div>
          <div class="col-12 col-md-8">
            <div id="weeklyEarningReports"></div>
          </div>
        </div>
        <div class="border rounded p-3 mt-2">
          <div class="row gap-4 gap-sm-0">
            <div class="col-12 col-sm-4">
              <div class="d-flex gap-2 align-items-center">
                <div class="badge rounded bg-label-primary p-1"><i class="ti ti-currency-dollar ti-sm"></i></div>
                <h6 class="mb-0">Earnings</h6>
              </div>
              <h4 class="my-2 pt-1">$545.69</h4>
              <div class="progress w-75" style="height:4px">
                <div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-12 col-sm-4">
              <div class="d-flex gap-2 align-items-center">
                <div class="badge rounded bg-label-info p-1"><i class="ti ti-chart-pie-2 ti-sm"></i></div>
                <h6 class="mb-0">Profit</h6>
              </div>
              <h4 class="my-2 pt-1">$256.34</h4>
              <div class="progress w-75" style="height:4px">
                <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="col-12 col-sm-4">
              <div class="d-flex gap-2 align-items-center">
                <div class="badge rounded bg-label-danger p-1"><i class="ti ti-brand-paypal ti-sm"></i></div>
                <h6 class="mb-0">Expense</h6>
              </div>
              <h4 class="my-2 pt-1">$74.19</h4>
              <div class="progress w-75" style="height:4px">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Support Tracker -->
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-header pb-0 d-flex justify-content-between">
        <div class="card-title mb-0">
          <h5 class="mb-0">Support Tracker</h5>
          <small class="text-muted">Last 7 Days</small>
        </div>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="supportTrackerMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="supportTrackerMenu">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-12 col-sm-4 col-md-12 col-lg-4">
          <div class="mt-lg-4 mt-lg-2 mb-lg-4 mb-2 pt-1">
            <h1 class="mb-0">164</h1>
            <p class="mb-0">Total Tickets</p>
          </div>
          <ul class="p-0 m-0">
            <li class="d-flex gap-3 align-items-center mb-lg-3 pt-2 pb-1">
              <div class="badge rounded bg-label-primary p-1"><i class="ti ti-ticket ti-sm"></i></div>
              <div>
                <h6 class="mb-0 text-nowrap">New Tickets</h6>
                <small class="text-muted">142</small>
              </div>
            </li>
            <li class="d-flex gap-3 align-items-center mb-lg-3 pb-1">
              <div class="badge rounded bg-label-info p-1"><i class="ti ti-circle-check ti-sm"></i></div>
              <div>
                <h6 class="mb-0 text-nowrap">Open Tickets</h6>
                <small class="text-muted">28</small>
              </div>
            </li>
            <li class="d-flex gap-3 align-items-center pb-1">
              <div class="badge rounded bg-label-warning p-1"><i class="ti ti-clock ti-sm"></i></div>
              <div>
                <h6 class="mb-0 text-nowrap">Response Time</h6>
                <small class="text-muted">1 Day</small>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-8 col-md-12 col-lg-8">
          <div id="supportTracker"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Sales last 6 months -->
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title mb-0">
          <h5 class="mb-0">Sales</h5>
          <small class="text-muted">Last 6 Months</small>
        </div>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="salesLastMonthMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="salesLastMonthMenu">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div id="salesLastMonth"></div>
      </div>
    </div>
  </div>

  <!-- Revenue Report -->
  <div class="col-12 col-lg-8 mb-4">
    <div class="card">
      <div class="card-header pb-3">
        <h5 class="m-0 card-title">Revenue Report</h5>
      </div>
      <div class="card-body">
        <div class="row row-bordered g-0">
          <div class="col-md-8">
            <div id="totalRevenueChart"></div>
          </div>
          <div class="col-md-4">
            <div class="text-center mt-4">
              <div class="dropdown">
                <button class="btn btn-sm btn-outline-primary dropdown-toggle" type="button" id="budgetId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <script>
                    document.write(new Date().getFullYear())

                  </script>
                </button>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="budgetId">
                  <a class="dropdown-item prev-year1" href="javascript:void(0);">
                    <script>
                      document.write(new Date().getFullYear() - 1)

                    </script>
                  </a>
                  <a class="dropdown-item prev-year2" href="javascript:void(0);">
                    <script>
                      document.write(new Date().getFullYear() - 2)

                    </script>
                  </a>
                  <a class="dropdown-item prev-year3" href="javascript:void(0);">
                    <script>
                      document.write(new Date().getFullYear() - 3)

                    </script>
                  </a>
                </div>
              </div>
            </div>
            <h3 class="text-center pt-4 mb-0">$25,825</h3>
            <p class="mb-4 text-center"><span class="fw-semibold">Budget: </span>56,800</p>
            <div class="px-3">
              <div id="budgetChart"></div>
            </div>
            <div class="text-center mt-4">
              <button type="button" class="btn btn-primary">Increase Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Status -->
  <div class="col-12 col-xl-4 mb-4 col-md-6 order-2 order-xl-1">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h5 class="mb-0 card-title">Project Status</h5>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="projectStatusId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="projectStatusId">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex align-items-start">
          <div class="badge rounded bg-label-primary p-2 me-3 rounded"><i class="ti ti-currency-dollar ti-sm"></i></div>
          <div class="d-flex justify-content-between w-100 gap-2 align-items-center">
            <div class="me-2">
              <h6 class="mb-0">$4,3742</h6>
              <small class="text-muted">Your Earnings</small>
            </div>
            <p class="mb-0 text-success">+10.2%</p>
          </div>
        </div>
        <div id="projectStatusChart"></div>
        <div class="d-flex justify-content-between mb-3">
          <h6 class="mb-0">Donates</h6>
          <div class="d-flex">
            <p class="mb-0 me-3">$756.26</p>
            <p class="mb-0 text-danger">-139.34</p>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3 pb-1">
          <h6 class="mb-0">Podcasts</h6>
          <div class="d-flex">
            <p class="mb-0 me-3">$2,207.03</p>
            <p class="mb-0 text-success">+576.24</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Earning Reports Tabs-->
  <div class="col-12 col-xl-8 mb-4 order-1 order-xl-2">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div class="card-title m-0">
          <h5 class="mb-0">Earning Reports</h5>
          <small class="text-muted">Yearly Earnings Overview</small>
        </div>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="earningReportsTabsId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsTabsId">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <ul class="nav nav-tabs widget-nav-tabs pb-3 gap-4 mx-1 d-flex flex-nowrap" role="tablist">
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link btn active d-flex flex-column align-items-center justify-content-center" role="tab" data-bs-toggle="tab" data-bs-target="#navs-orders-id" aria-controls="navs-orders-id" aria-selected="true">
              <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-shopping-cart ti-sm"></i></div>
              <h6 class="tab-widget-title mb-0 mt-2">Orders</h6>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link btn d-flex flex-column align-items-center justify-content-center" role="tab" data-bs-toggle="tab" data-bs-target="#navs-sales-id" aria-controls="navs-sales-id" aria-selected="false">
              <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-chart-bar ti-sm"></i></div>
              <h6 class="tab-widget-title mb-0 mt-2"> Sales</h6>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link btn d-flex flex-column align-items-center justify-content-center" role="tab" data-bs-toggle="tab" data-bs-target="#navs-profit-id" aria-controls="navs-profit-id" aria-selected="false">
              <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-currency-dollar ti-sm"></i></div>
              <h6 class="tab-widget-title mb-0 mt-2">Profit</h6>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link btn d-flex flex-column align-items-center justify-content-center" role="tab" data-bs-toggle="tab" data-bs-target="#navs-income-id" aria-controls="navs-income-id" aria-selected="false">
              <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-chart-pie-2 ti-sm"></i></div>
              <h6 class="tab-widget-title mb-0 mt-2">Income</h6>
            </a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link btn d-flex align-items-center justify-content-center disabled" role="tab" data-bs-toggle="tab" aria-selected="false">
              <div class="badge bg-label-secondary rounded p-2"><i class="ti ti-plus ti-sm"></i></div>
            </a>
          </li>
        </ul>
        <div class="tab-content p-0 ms-0 ms-sm-2">
          <div class="tab-pane fade show active" id="navs-orders-id" role="tabpanel">
            <div id="earningReportsTabsOrders"></div>
          </div>
          <div class="tab-pane fade" id="navs-sales-id" role="tabpanel">
            <div id="earningReportsTabsSales"></div>
          </div>
          <div class="tab-pane fade" id="navs-profit-id" role="tabpanel">
            <div id="earningReportsTabsProfit"></div>
          </div>
          <div class="tab-pane fade" id="navs-income-id" role="tabpanel">
            <div id="earningReportsTabsIncome"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Total Earning -->
  <div class="col-12 col-xl-4 col-md-6 order-3">
    <div class="card">
      <div class="card-header d-flex justify-content-between pb-1">
        <h5 class="mb-0 card-title">Total Earning</h5>
        <div class="dropdown">
          <button class="btn p-0" type="button" id="totalEarning" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="ti ti-dots-vertical ti-sm text-muted"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="totalEarning">
            <a class="dropdown-item" href="javascript:void(0);">View More</a>
            <a class="dropdown-item" href="javascript:void(0);">Delete</a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <h1 class="mb-0 me-2">87%</h1>
          <i class="ti ti-chevron-up text-success me-1"></i>
          <p class="text-success mb-0">25.8%</p>
        </div>
        <div id="totalEarningChart"></div>
        <div class="d-flex align-items-start my-4">
          <div class="badge rounded bg-label-danger p-2 me-3 rounded"><i class="ti ti-brand-paypal ti-sm"></i></div>
          <div class="d-flex justify-content-between w-100 gap-2 align-items-center">
            <div class="me-2">
              <h6 class="mb-0">Total Revenue</h6>
              <small class="text-muted">Client Payment</small>
            </div>
            <p class="mb-0 text-success">+$126</p>
          </div>
        </div>
        <div class="d-flex align-items-start">
          <div class="badge rounded bg-label-primary p-2 me-3 rounded"><i class="ti ti-currency-dollar ti-sm"></i></div>
          <div class="d-flex justify-content-between w-100 gap-2 align-items-center">
            <div class="me-2">
              <h6 class="mb-0">Total Sales</h6>
              <small class="text-muted">Refund</small>
            </div>
            <p class="mb-0 text-success">+$98</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



@endsection
