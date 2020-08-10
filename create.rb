require 'erb'
class Info
  attr_accessor :title
  def template_binding
    binding
  end
end

filename = ARGV[0];
new_file = File.open("./#{filename}.md", "w+")
template = File.read("./template.erb")
rand_emoji = rand(('1F300'.hex)..('1F531'.hex)).chr('UTF-8');
ifno = Info.new
ifno.title = rand_emoji.concat(" " + ARGV[1]); 
new_file << ERB.new(template).result(ifno.template_binding)
new_file.close