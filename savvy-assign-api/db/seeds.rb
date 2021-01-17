# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Creating initial user, can be used for initial login
require 'date'

user = User.create!(
    name: 'Shaurya Agnihotri', 
    email: 'shaurya@gmail.com',
    password: 'password',
    password_confirmation: 'password')

# Creating 2 goals for this initial user
user.goal.create!(
    name: 'Buy Car', 
    description: 'Buy Mercedes Benz (latest version)',
    amount: 20000000.50,
    goal_target_date: Date.new(2025, 1, 1))

user.goal.create!(
    name: 'Pension Plan', 
    description: 'Pension Plan after 50',
    amount: 100000000,
    goal_target_date: Date.new(2051, 12, 31))
