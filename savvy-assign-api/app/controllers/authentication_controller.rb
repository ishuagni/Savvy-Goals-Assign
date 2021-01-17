class AuthenticationController < ApplicationController
    skip_before_action :authenticate_request
   
    def authenticate
      command = AuthenticateUser.call(params[:email], params[:password])
   
      if command.success?
        render json: { auth_token: command.result }
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end


    def create_user

      if params[:name] && params[:email] && params[:password]
        user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password])

        if user.save
          render json: { message: 'User created successfully' }
        else
          render json: { error: 'Error occured while creating user' }, status: 401
        end
      else
        render json: { error: 'All the params were not passed' }, status: 401
      end
    end
end