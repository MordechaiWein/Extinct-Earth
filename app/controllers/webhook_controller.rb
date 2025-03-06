class WebhookController < ApplicationController
    skip_before_action :authorize

    def broadcast
        puts "---------!WEBHOOK!------------"
        puts ""
        p params
        puts ""
        puts "----------------------------"
        ActionCable.server.broadcast("chat_channel", params)
    end
end