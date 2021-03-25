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
  get 'homepage/index'
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
