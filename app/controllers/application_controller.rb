class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    # before_action :authenticate_request
    attr_reader :current_shop_owner
  
    private
  
    def authenticate_request
        @current_shop_owner = AuthorizeApiRequest.call(request.headers).result
        render json: { error: 'Not Authorized' }, status: 401 unless @current_shop_owner
    end
end
