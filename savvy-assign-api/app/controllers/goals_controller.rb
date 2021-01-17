class GoalsController < ApplicationController
  before_action :set_goal, only: [:show, :update, :destroy]

  # GET /goals
  def index
    @user = current_user
    @goals = @user.goal

    render json: { 'goals': @goals, 'user': { 'name': @user.name, 'email': @user.email } }
  end

  # GET /goals/1
  def show
    render json: @goal
  end

  # POST /goals
  def create
    @goal = current_user.goal.create(goal_params)

    if @goal.save
      render json: @goal, status: :created, location: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /goals/1
  def update
    if @goal.update(goal_params)
      render json: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /goals/1
  def destroy
    @goal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_goal
      @goal = Goal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def goal_params
      params.require(:goal).permit(:name, :description, :amount, :goal_target_date)
    end
end
