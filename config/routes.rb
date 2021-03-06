Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {registrations:  'registrations', confirmations: 'confirmations'}

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  scope '/api' do #, defaults: { format: :json } do
    scope '/v1' do
      resources :cards, only: [:index, :show]
      resources :categories, only: [:index, :show]
      resources :tags, only: [:index, :show]
      resources :lists, only: [:create, :show]
      resources :orders, only: [:create]
      resources :organizations, only: [:index, :create]
      resources :reps, only: [:create]
      resources :shortened_urls, only: [:index]
      resources :members, only: [:create]
      resources :proofs, only: [:show]
    end
  end

  # namespace "*", :constraints => ::Subdomains::Organization do
  #   #  resources :posts
  # end

  get '/', to: 'application#fallback_index_html', :constraints => ::Subdomains::Organization


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
