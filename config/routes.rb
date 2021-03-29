Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'appointments/index'
      get 'appointments/create'
      get 'appointments/show/:id', to: 'appointments#show'
      get 'appointments/destroy/:id', to: 'appointments#destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'shop_owners/index'
      post 'shop_owners/create'
      get 'shop_owners/show/:id', to: 'shop_owners#show'
      get 'shop_owners/destroy/:id', to: 'shop_owners#destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'customers/index'
      get 'customers/create'
      get 'customers/show/:id', to: 'customers#show'
      get 'customers/destroy/:id', to: 'customers#destroy'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'vehicle_infos/get_years', to: 'vehicle_infos#get_years'
      get 'vehicle_infos/:year/get_makes', to: 'vehicle_infos#get_makes'
      get 'vehicle_infos/:year/:make/get_models', to: 'vehicle_infos#get_models'
      get 'vehicle_infos/:year/:make/:model/get_body_styles', to: 'vehicle_infos#get_body_styles'
    end
  end


  get 'homepage/index'
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'customers/signup', to: 'customers#new'
  # post 'customers/signup', to: 'customers#create'
  # get 'customers/profile', to: 'customers#show'

  # get 'customers/login', to: 'sessions#newcustomer'
  # post 'customers/login', to: 'sessions#createcustomer'
  # get 'customers/logout', to: 'sessions#destroycustomer'

  # get 'shop_owners/signup', to: 'shop_owner#new'
  # post 'shop_owners/signup', to: 'shop_owner#create'
  # get 'shop_owners/profile', to: 'shop_owner#show'

  # get 'shop_owners/login', to: 'sessions#newshop_owner'
  # post 'shop_owners/login', to: 'sessions#createshop_owner'
  # get 'shop_owners/logout', to: 'sessions#destroyshop_owner'

  # get '/', to: 'welcome#index'
  # get '/signup', to: 'welcome#signup'
  # get '/login', to: 'welcome#login'
end
