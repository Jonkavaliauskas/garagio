Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'appointments/index', to: 'appointments#index'
      post 'appointments/index', to: 'appointments#create'
      get 'appointments/:id', to: 'appointments#show'
      patch 'appointments/:id', to: 'appointments#update'
      delete 'appointments/:id', to: 'appointments#destroy'

      get 'shop_owners/index', to: 'shop_owners#index'
      post 'shop_owners/index', to: 'shop_owners#create'
      get 'shop_owners/:id', to: 'shop_owners#show'
      patch 'shop_owners/:id', to: 'shop_owners#update'
      delete 'shop_owners/:id', to: 'shop_owners#destroy'

      get 'customers/index', to: 'customers#index'
      post 'customers/index', to: 'customers#create'
      get 'customers/:id', to: 'customers#show'
      patch 'customers/:id', to: 'customers#update'
      delete 'customers/:id', to: 'customers#destroy'
      
      get 'customers/index', to: 'customers#index'
      post 'customers/index', to: 'customers#create'
      get 'customers/:id', to: 'customers#show'
      patch 'customers/:id', to: 'customers#update'
      delete 'customers/:id', to: 'customers#destroy'

      get 'cars/index', to: "cars#index"
      post 'cars/index', to: "cars#create"
      get 'cars/:id', to: 'cars#show'
      patch 'cars/:id', to: 'cars#update'
      delete 'cars/:id', to: 'cars#destroy'

      get 'reviews/index', to: "reviews#index"
      post 'reviews/index', to: "reviews#create"
      get 'reviews/:id', to: 'reviews#show'
      patch 'reviews/:id', to: 'reviews#update'
      delete 'reviews/:id', to: 'reviews#destroy'
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

  # old test controllers

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
