require 'sinatra'
require 'open-uri'
require 'timeout'

set :port, 8033
#set :threaded, false

API_SERVER='http://ajax.googleapis.com'
get '/googleapis/**' do |_, path|
        #p path
        begin
                Timeout::timeout(10) do
                        open("#{API_SERVER}/#{path}") do |f|
                                content_type f.content_type
                                body f.read
                        end
                end
        rescue# String
                halt 404
        end
end
