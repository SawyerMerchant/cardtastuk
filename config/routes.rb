Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'#, controllers: {
                                        #   confirmations:      'auth/confirmations',
                                        #   passwords:          'auth/passwords',
                                        #   registrations:      'auth/registrations',
                                        #   sessions:           'auth/sessions',
                                        # }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  scope '/api' do #, defaults: { format: :json } do
    scope '/v1' do
      resources :cards, only: [:index, :show]
      resources :categories, only: [:index, :show]
      resources :tags, only: [:index, :show]

    end
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
